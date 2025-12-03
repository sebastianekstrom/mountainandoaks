import { createContext, useContext, useState } from "react";
import type React from "react";

interface ChaosContextType {
  isChaosModeEnabled: boolean;
  toggleChaosMode: () => void;
  chaosSequence: {
    showCookies: boolean;
    showNewsletter: boolean;
    showYouTube: boolean;
    showFinalNewsletter: boolean;
    showStickyVideo: boolean;
  };
  dismissCookies: () => void;
  dismissNewsletter: () => void;
  dismissYouTube: () => void;
  dismissFinalNewsletter: () => void;
  dismissStickyVideo: () => void;
}

const ChaosContext = createContext<ChaosContextType | undefined>(undefined);

export const useChaos = () => {
  const context = useContext(ChaosContext);
  if (context === undefined) {
    throw new Error("useChaos must be used within a ChaosProvider");
  }
  return context;
};

interface ChaosProviderProps {
  children: React.ReactNode;
}

export const ChaosProvider: React.FC<ChaosProviderProps> = ({ children }) => {
  const [isChaosModeEnabled, setIsChaosModeEnabled] = useState(false);
  const [chaosSequence, setChaosSequence] = useState({
    showCookies: false,
    showNewsletter: false,
    showYouTube: false,
    showFinalNewsletter: false,
    showStickyVideo: false,
  });

  const toggleChaosMode = () => {
    setIsChaosModeEnabled((prev) => {
      if (!prev) {
        // Enabling chaos mode - start the sequence
        setChaosSequence({
          showCookies: true,
          showNewsletter: false,
          showYouTube: false,
          showFinalNewsletter: false,
          showStickyVideo: false,
        });
      } else {
        // Disabling chaos mode - reset everything
        setChaosSequence({
          showCookies: false,
          showNewsletter: false,
          showYouTube: false,
          showFinalNewsletter: false,
          showStickyVideo: false,
        });
      }
      return !prev;
    });
  };

  const dismissCookies = () => {
    setChaosSequence((prev) => ({ ...prev, showCookies: false }));

    setTimeout(() => {
      setChaosSequence((prev) => ({ ...prev, showNewsletter: true }));
    }, 1000);
  };

  const dismissNewsletter = () => {
    setChaosSequence((prev) => ({ ...prev, showNewsletter: false }));

    setTimeout(() => {
      setChaosSequence((prev) => ({ ...prev, showYouTube: true }));
    }, 1500);
  };

  const dismissYouTube = () => {
    setChaosSequence((prev) => ({ ...prev, showYouTube: false }));

    setTimeout(() => {
      setChaosSequence((prev) => ({ ...prev, showFinalNewsletter: true }));
    }, 1000);
  };

  const dismissFinalNewsletter = () => {
    setChaosSequence((prev) => ({ ...prev, showFinalNewsletter: false }));

    setTimeout(() => {
      setChaosSequence((prev) => ({ ...prev, showStickyVideo: true }));
    }, 2000);
  };

  const dismissStickyVideo = () => {
    setChaosSequence((prev) => ({ ...prev, showStickyVideo: false }));
  };

  return (
    <ChaosContext.Provider
      value={{
        isChaosModeEnabled,
        toggleChaosMode,
        chaosSequence,
        dismissCookies,
        dismissNewsletter,
        dismissYouTube,
        dismissFinalNewsletter,
        dismissStickyVideo,
      }}
    >
      {children}
    </ChaosContext.Provider>
  );
};
