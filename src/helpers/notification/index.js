import { useNotification } from '@kyvg/vue3-notification'

const { notify } = useNotification()

export const successMsg = (title = 'Success', text = 'Everything is okay') =>
  notify({
    title,
    text,
    type: 'success'
  })
