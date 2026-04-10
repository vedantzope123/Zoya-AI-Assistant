import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ClearHistoryModal({ isOpen, onClose, onConfirm }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-sm bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                <AlertTriangle className="text-red-500" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Clear History?</h3>
                <p className="text-sm text-white/60">This will delete all your sassy conversations with Zoya.</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/10"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 size={18} />
                Clear All
              </button>
            </div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
