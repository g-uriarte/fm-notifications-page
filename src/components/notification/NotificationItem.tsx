import { FC } from "react";
import type { Notification, NotificationCommentPicture, NotificationFollow, NotificationJoiningGroup, NotificationNewPrivateMessage, NotificationReactionPost, NotificationType, NotificationUnfollow, } from "../../types/types";
import { NotificationNewPrivateMessage as NotiPrivateMessage } from "./variants/NotificationNewPrivateMessage";
import { NotificationReactionPost as NotiReactionPost } from "./variants/NotificationReactionPost";
import { NotificationFollow as NotiFollow } from "./variants/NotificationFollow";
import { NotificationGroup } from "./variants/NotificationGroup";
import { NotificationUnfollow as NotiUnfollow } from "./variants/NotificationUnfollow";
import { NotificationCommentPicture as NotiCommenPicture } from "./variants/NotificationCommentPicture";

export type NotificationItemProps<T extends Notification> = {
    notification: T;
    readNotification?: () => void;
}

type NotificationDic = {
    "private-message": NotificationNewPrivateMessage;
    "reaction-post": NotificationReactionPost;
    "follow": NotificationFollow;
    "group": NotificationJoiningGroup;
    "unfollow": NotificationUnfollow;
    "comment-picture": NotificationCommentPicture;
};

type NotificationNode<T extends Notification> = {
    Item: FC<NotificationItemProps<T>>;
}

const notificationDic: {
    [K in NotificationType]: NotificationNode<NotificationDic[K]>
} = {
    "private-message": {
        Item: NotiPrivateMessage
    },
    "reaction-post": {
        Item: NotiReactionPost
    },
    follow: {
        Item: NotiFollow
    },
    group: {
        Item: NotificationGroup
    },
    unfollow: {
        Item: NotiUnfollow
    },
    "comment-picture": {
        Item: NotiCommenPicture
    }
}

export const NotificationItem: FC<NotificationItemProps<Notification>> = ({
    notification,
    readNotification
}) => {

    const item = notificationDic[notification.type];

    const ItemComponent = item.Item as FC<NotificationItemProps<typeof notification>>;

    return (
        <ItemComponent readNotification={readNotification} notification={notification} />
    )
}