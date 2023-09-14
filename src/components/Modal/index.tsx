import { Modal as MuiModal } from '@mui/material'
import React, { FC, PropsWithChildren } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { appActions, appSelectors } from '../../store/features';

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  const isOpen = useAppSelector(appSelectors.isModalOpen)
  const dispatch = useAppDispatch();

  return (
    <MuiModal sx={{ maxWidth: '100%' }} open={isOpen} onClose={() => { dispatch(appActions.closeModal()) }}><>{children}</></MuiModal>
  )
}
