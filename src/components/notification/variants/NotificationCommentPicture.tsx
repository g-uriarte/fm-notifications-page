import { FC } from "react"
import { NotificationItemProps } from "../NotificationItem"
import { NotificationCommentPicture as NotiCommentPicture } from "../../../types/types"
import { NotificationContent } from "../NotificationContent"
import { NotificationUserImage } from "../UserImage"
import { HighlightedText } from "../../HighlightedText"
import { DotNotificationIcon } from "../DotNotificationIcon"

export const NotificationCommentPicture: FC<NotificationItemProps<NotiCommentPicture>> = ({
    readNotification,
    notification
}) => {

    return (
        <NotificationContent isReaded={notification.isReaded} onClick={readNotification} >
            <div className='flex flex-row gap-4'>
                <NotificationUserImage urlImage={notification.userInteraction.image_url} />
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center gap-1'>
                        <p><HighlightedText text={notification.userInteraction.name} /> commented on your picture</p>
                        {!notification.isReaded && <DotNotificationIcon />}
                    </div>
                    <p className='text-grayish-blue text-sm'>{notification.time}</p>
                </div>
                <div className="ml-auto">
                    <img
                        src={notification.picture}
                        alt={'post picture'}
                        className='object-cover h-10 w-10 rounded-md'
                    />
                </div>
            </div>
        </NotificationContent>
    )
}
