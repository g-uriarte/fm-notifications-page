import { FC, useState } from "react";
import { Notification } from '../types/types'
import { NotificationItem  } from "./notification";

type NotificationsContainerProps = {
    notifications: Notification[]
}

export const NotificationsContainer: FC<NotificationsContainerProps> = ({
    notifications
}) => {

    const [notis, setNotifications] = useState<Notification[]>(notifications);

    const unreadNotis = notis.filter(n => !n.isReaded).length;

    const readNotification = (index: number) => {
        const newNotis = notis.map((n, i) => {
            if (index === i) {
                n.isReaded = true;
                return n;
            } else {
                return n;
            }
        })
        setNotifications(newNotis);
    }

    const handleMarkAllAsRead = () => {
        notis.forEach(n => n.isReaded = true);
        const newNotis = [...notis];
        setNotifications(newNotis);
    }

    return (
        <div className="flex flex-col gap-5 bg-noti-white p-5 rounded-md shadow-md sm:w-[250px] xl:w-[700px]">
            <div className="flex flex-row justify-between items-center">
                <h2>Notifications <span className="inline-block bg-notie-blue text-notie-white h-6 w-6 rounded-md text-center" >{unreadNotis}</span></h2>
                <button className="text-grayish-blue hover:text-notie-blue" onClick={handleMarkAllAsRead} >
                    Mark all as read
                </button>
            </div>
            <div className="flex flex-col gap-2">
                {notis.map((notification, index) => (
                    <NotificationItem
                        key={notification.id}
                        notification={notification}
                        readNotification={!notification.isReaded ? 
                            () => {
                                readNotification(index);
                            } : undefined
                        }
                    />
                ))}
            </div>
        </div>
    )
}