import { FC } from "react"
import { NotificationItemProps } from "../NotificationItem"
import { NotificationContent } from "../NotificationContent"
import { NotificationNewPrivateMessage as NotificationNewPrivateMessageType } from "../../../types/types"
import { NotificationUserImage } from "../UserImage"
import { HighlightedText } from "../../HighlightedText"
import { DotNotificationIcon } from "../DotNotificationIcon"
import { cn } from '../../../utils/tw'

export const NotificationNewPrivateMessage: FC<NotificationItemProps<NotificationNewPrivateMessageType>> = ({
    readNotification,
    notification
}) => {

    return (
        <NotificationContent isReaded={notification.isReaded} onClick={readNotification} >
            <div className='flex flex-row gap-4'>
                <NotificationUserImage urlImage={notification.userInteraction.image_url} className="items-start" />
                <div className='flex flex-col w-full'>
                    <div className='flex flex-row items-center gap-1'>
                        <p><HighlightedText text={notification.userInteraction.name} /> sent you a private message </p>
                        {!notification.isReaded && <DotNotificationIcon />}
                    </div>
                    <p className='text-grayish-blue text-sm'>{notification.time}</p>
                    <div className={
                        cn(
                            'rounded-md mt-5 border p-4 border-gray-300', 
                            { 
                                'bg-notie-light-grayish-blue ': !notification.isReaded, 
                                'hover:bg-notie-light-grayish-blue': notification.isReaded 
                            })
                    }>
                        <p className="text-pretty">{notification.message}</p>
                    </div>
                </div>
            </div>
        </NotificationContent>
    )
}