import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import './Modal.css'

const backdropVariant = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 }
}

const Modal = ({ showModal, setShowModal }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{showModal && (
				<motion.div className="backdrop" variants={backdropVariant} initial="hidden" animate="visible" exit="hidden">
					<motion.div className="modal">
						<p>This is a fake website for a salad delivery service. Fake, but not a bad idea. Enjoy.</p>
						<button className="modal_button" onClick={() => setShowModal(!showModal)}>OK</button>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Modal
