import { FC } from "react"
import { NotificationContent } from "../NotificationContent"
import { NotificationItemProps } from "../NotificationItem"
import { NotificationReactionPost as NotificationReactionPostType } from "../../../types/types"
import { NotificationUserImage } from "../UserImage"
import { DotNotificationIcon } from "../DotNotificationIcon"
import { HighlightedText } from "../../HighlightedText"

export const NotificationReactionPost: FC<NotificationItemProps<NotificationReactionPostType>> = ({
    readNotification,
    notification
}) => {
    
    return (
        <NotificationContent isReaded={notification.isReaded} onClick={readNotification} >
            <div className='flex flex-row gap-4'>
                <NotificationUserImage urlImage={notification.userInteraction.image_url} />
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center gap-1'>
                        <p><HighlightedText text={notification.userInteraction.name} /> React to your recent post <HighlightedText text={notification.postTitle} /> </p>
                        {!notification.isReaded && <DotNotificationIcon />}
                    </div>
                    <p className='text-grayish-blue text-sm'>{notification.time}</p>
                </div>
            </div>
        </NotificationContent>
    )
}