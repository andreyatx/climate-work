import { Box } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

type CreateFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const CreateForm: FC<PropsWithChildren<CreateFormProps>> = ({ onSubmit, children }) => {
  return (
    <Box sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      alignItems: 'center',
      width: '100%',
      maxWidth: { md: '540px' },
    }}
      component="form" onSubmit={onSubmit}
    >{children}</Box>
  )
}
