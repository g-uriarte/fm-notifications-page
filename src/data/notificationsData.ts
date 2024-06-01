import { Notification, NotificationCommentPicture, 
    NotificationFollow, NotificationJoiningGroup, 
    NotificationNewPrivateMessage, NotificationReactionPost 
} from "../types/types";

const notificationReaction: NotificationReactionPost = {
    id: 1,
    type: 'reaction-post',
    postTitle: 'My little post',
    time: '2 days ago',
    userInteraction: {
        name: 'Pedro',
        image_url: 'https://i.pravatar.cc/300?img=3'
    },
    isReaded: false
}
const notificationFollow: NotificationFollow = {
    id: 2,
    type: 'follow',
    action: 'follow',
    time: '1 day ago',
    userInteraction: {
        name: 'Sam',
        image_url: 'https://i.pravatar.cc/300?img=4'
    },
    isReaded: false
}

const notificationJoiningGroup: NotificationJoiningGroup = {
    id: 3,
    type: 'group',
    action: 'join',
    groupName: 'The bros',
    time: '1 day ago',
    userInteraction: {
        name: 'Carl',
        image_url: 'https://i.pravatar.cc/300?img=6'
    },
    isReaded: false
}

const notificationPrivateMessage: NotificationNewPrivateMessage = {
    id: 4,
    type: 'private-message',
    message: 'Hello this is sample message to display on the content of the notification Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
    time: '1 day ago',
    userInteraction: {
        name: 'Curl',
        image_url: 'https://i.pravatar.cc/300?img=7'
    },
    isReaded: false
} 

const notificationCommentPicture: NotificationCommentPicture = {
    id: 5,
    type: 'comment-picture',
    userInteraction: {
        name: 'Mara',
        image_url: 'https://i.pravatar.cc/300?img=19'
    },
    time: '1 day ago',
    picture: 'https://i.pravatar.cc/500?img=11',
    isReaded: false
}

const notificationReactionPost2: NotificationReactionPost = {
    id: 6,
    type: 'reaction-post',
    postTitle: 'A little abstract about the family',
    time: '1 week ago',
    userInteraction: {
        name: 'Mara',
        image_url: 'https://i.pravatar.cc/300?img=8'
    },
    isReaded: false
}

const notificationLeftGroup: NotificationJoiningGroup = {
    id: 7,
    type: 'group',
    action: 'left',
    groupName: 'The bros',
    time: '1 day ago',
    userInteraction: {
        name: 'Kim',
        image_url: 'https://i.pravatar.cc/300?img=9'
    },
    isReaded: false
}

export const NOTIFICATIONS: Notification[] = [
    notificationReaction,
    notificationFollow,
    notificationJoiningGroup,
    notificationPrivateMessage,
    notificationCommentPicture,
    notificationReactionPost2,
    notificationLeftGroup
];