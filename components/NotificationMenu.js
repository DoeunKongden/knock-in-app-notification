'use client'
import { useState, useRef, useEffect } from "react";
import {
    KnockProvider,
    KnockFeedProvider,
    NotificationIconButton,
    NotificationFeedPopover,
} from "@knocklabs/react";

// Required CSS import, unless you're overriding the styling
import "@knocklabs/react/dist/index.css";



const KnockNotitification = () => {
    const [isVisible, setIsVisible] = useState(false);
    const notifButtonRef = useRef(null);


    return (
        <KnockProvider
            apiKey={"pk_test_Yv0uytmFiG_-GOtO5Z2mFjlbaKqisbd4jGsPow0K-fI"}
            userId={'user-123'}
        >
            <KnockFeedProvider feedId={process.env.KNOCK_FEED_CHANNEL_ID}>
                <>
                    <NotificationIconButton
                        ref={notifButtonRef}
                        onClick={(e) => setIsVisible(!isVisible)}
                    />
                    <NotificationFeedPopover
                        buttonRef={notifButtonRef}
                        isVisible={isVisible}
                        onClose={() => setIsVisible(false)}
                    />
                </>
            </KnockFeedProvider>
        </KnockProvider>
    );
};

export default KnockNotitification;