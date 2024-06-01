import { FC, HTMLProps, PropsWithChildren } from "react";
import { cn } from "../../utils/tw";

type NotificationContentProps = {
    isReaded: boolean;
} & PropsWithChildren & HTMLProps<HTMLDivElement>;

export const NotificationContent: FC<NotificationContentProps> = ({
    children,
    isReaded,
    ...props
}) => {

    return (
        <div className={
            cn('w-full rounded-md p-3', props.className, { 'bg-notie-light-grayish-blue': !isReaded })
        }
            {...props}
        >
            {children}
        </div>
    );
} 