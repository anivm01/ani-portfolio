import { Dialog } from "@headlessui/react";
import React, { ReactNode } from 'react';

type ModalProps = {
    onClose: () => void;
    children: ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {

    return (
        <Dialog
            static
            open={true}
            onClose={onClose}
            className="fixed inset-0 z-10 flex items-center justify-center w-screen"
        >
            <Dialog.Overlay
                className="fixed inset-0 bg-gray-800/60"
            />
            <div className="relative flex items-center justify-center w-full lg:w-2/3">
                {children}
            </div>
        </Dialog>
    );
}