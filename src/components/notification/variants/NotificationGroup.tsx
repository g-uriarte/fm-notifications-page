import { FC } from 'react'
import { NotificationItemProps } from '../NotificationItem'
import { NotificationContent } from '../NotificationContent'
import { NotificationJoiningGroup } from '../../../types/types'
import { NotificationUserImage } from '../UserImage'
import { HighlightedText } from '../../HighlightedText'
import { DotNotificationIcon } from '../DotNotificationIcon'

export const NotificationGroup: FC<NotificationItemProps<NotificationJoiningGroup>> = ({
    readNotification,
    notification
}) => {
    return (
        <NotificationContent isReaded={notification.isReaded} onClick={readNotification}>
             <div className='flex flex-row gap-4'>
                <NotificationUserImage urlImage={notification.userInteraction.image_url} />
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center gap-1'>
                        <p><HighlightedText text={notification.userInteraction.name} /> has joined your group <HighlightedText text={notification.groupName} /> </p>
                        {!notification.isReaded && <DotNotificationIcon />}
                    </div>
                    <p className='text-grayish-blue text-sm'>{notification.time}</p>
                </div>
            </div>
        </NotificationContent>
    )
}