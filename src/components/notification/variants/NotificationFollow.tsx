import { FC } from 'react'
import { NotificationItemProps } from '../NotificationItem'
import { NotificationContent } from '../NotificationContent'
import { NotificationFollow as NotificationFollowType } from '../../../types/types'
import { NotificationUserImage } from '../UserImage'
import { DotNotificationIcon } from '../DotNotificationIcon'
import { HighlightedText } from '../../HighlightedText'

export const NotificationFollow: FC<NotificationItemProps<NotificationFollowType>> = ({
    readNotification,
    notification
}) => {

    return (
        <NotificationContent isReaded={notification.isReaded} onClick={readNotification} >
            <div className='flex flex-row gap-4'>
                <NotificationUserImage urlImage={notification.userInteraction.image_url} />
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center gap-1'>
                        <p><HighlightedText text={notification.userInteraction.name} /> followed you</p>
                        {!notification.isReaded && <DotNotificationIcon />}
                    </div>
                    <p className='text-grayish-blue text-sm'>{notification.time}</p>
                </div>
            </div>
        </NotificationContent>
    )
}