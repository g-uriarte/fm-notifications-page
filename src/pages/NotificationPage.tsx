import { FC } from "react";
import { NotificationsContainer } from "../components/NotificationsContainer";
import { NOTIFICATIONS } from "../data/notificationsData";

export const NotificationPage: FC = () => {
    
    return (
        <div className="w-full h-full bg-notie-light-grayish-blue flex items-center justify-center">
            <NotificationsContainer notifications={NOTIFICATIONS} />
        </div>
    );
}