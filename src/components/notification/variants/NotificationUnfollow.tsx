import { FC } from "react"
import { NotificationItemProps } from "../NotificationItem"
import { NotificationContent } from "../NotificationContent"
import { NotificationUnfollow as NotificationUnfollowType } from "../../../types/types"

export const NotificationUnfollow: FC<NotificationItemProps<NotificationUnfollowType>> = ({
    readNotification,
    notification
}) => {
    
    return (
        <NotificationContent isReaded={notification.isReaded} onClick={readNotification} >
            NotificationUnfollow
        </NotificationContent>
    )
}