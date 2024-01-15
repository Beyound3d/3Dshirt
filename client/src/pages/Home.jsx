import { motion, AnimatePresence } from 'framer-motion';
import state from '../store';
import { useSnapshot } from 'valtio'
import { slideAnimation } from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className="home"{...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img src='./threejs.png' alt="logo" className='w-2 h-2 object-contain' />
                    </motion.header>
                </motion.section>
            )}
        </AnimatePresence>
    )
}

export default Home