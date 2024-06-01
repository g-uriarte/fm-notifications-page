type ActionFollow = 'follow';
type ActionUnfollow = 'unfollow';
type ActionsFollow = ActionFollow | ActionUnfollow;

export type NotificationType = 'reaction-post' | 
'group' | 'private-message' | 
'follow' | 'unfollow' | 'comment-picture';

export interface User {
    name: string;
    image_url: string;
}

export interface Notification {
    id: number;
    type: NotificationType;
    userInteraction: User;
    time: string;
    isReaded: boolean;
}

export interface NotificationReactionPost extends Notification {
    type: 'reaction-post';
    postTitle: string; 
}

export interface NotificationJoiningGroup extends Notification {
    type: 'group';
    groupName: string;
    action: 'join' | 'left'
}

export interface NotificationNewPrivateMessage extends Notification {
    type: 'private-message';
    message: string;
}

export interface NotificationCommentPicture extends Notification {
    type: 'comment-picture';
    picture: string;
}

export interface NotificationActionFollow<T extends ActionsFollow> extends Notification {
    action: T
}

export interface NotificationFollow extends NotificationActionFollow<ActionFollow> {
    type: 'follow'
}
export interface NotificationUnfollow extends NotificationActionFollow<ActionUnfollow> {
    type: 'unfollow'
}
