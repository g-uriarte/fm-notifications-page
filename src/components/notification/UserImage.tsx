import { FC, HTMLProps } from "react";
import { cn } from "../../utils/tw";

type NotificationUserImageProps = {
    urlImage: string;
} & HTMLProps<HTMLDivElement>

export const NotificationUserImage: FC<NotificationUserImageProps> = ({
    urlImage,
    ...props
}) => {
    return (
        <div {...props} className={cn('flex items-center justify-center', props.className)}>
            <img
                src={urlImage}
                alt={'image of user'}
                className='object-cover h-10 w-10 rounded-full'
            />
        </div>
    )
}