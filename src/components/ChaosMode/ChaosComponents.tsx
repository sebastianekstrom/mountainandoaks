import { useState, useEffect } from "react";
import { Text } from "components/Text/Text";
import { useChaos } from "contexts/ChaosContext";
import Image from "next/image";
// Fake Advertisement Component
export const FakeAd: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div
    className={`bg-yellow-200 border-2 border-red-500 p-4 my-4 ${className}`}
  >
    <div className="flex flex-row items-center">
      <Image
        width={215}
        height={49}
        className="lg:w-[260px] w-[160px] h-auto rounded-m"
        src="/images/misc/thataintaknife.jpg"
        alt=""
      />
      <div className="p-4">
        <Text variant="h4" classNames="text-red-600 font-bold text-center">
          🔥 WIN THIS ODD KITCHEN GADGET!
        </Text>
        <Text variant="body" classNames="text-center mt-2">
          Enter your email to win whatever this is!
        </Text>
        <input
          type="email"
          placeholder="Enter your email..."
          className="w-full p-3 border-2 border-pink-300 rounded mb-4"
        />
        <button
          type="button"
          className="bg-red-600 text-white px-6 py-2 rounded-full mx-auto block mt-3 font-bold hover:bg-red-700"
        >
          <Text classNames="text-white">ENTER THE RAFFLE!</Text>
        </button>
      </div>
    </div>
  </div>
);

// Newsletter Popup Modal (remembering user prefers Radix UI)
export const NewsletterPopup: React.FC = () => {
  const { chaosSequence, dismissNewsletter } = useChaos();

  if (!chaosSequence.showNewsletter) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md mx-4 border-4 border-pink-500 shadow-2xl">
        <button
          type="button"
          onClick={dismissNewsletter}
          className="float-right text-2xl font-bold text-gray-600 hover:text-gray-800"
        >
          ×
        </button>
        <Text variant="h3" classNames="text-center mb-4">
          🎉 FOOD? 🎉
        </Text>
        <Text variant="body" classNames="text-center mb-4">
          Food! Our newsletter has food! Ooooh please subscribe yeeesss!!!
        </Text>
        <input
          type="email"
          placeholder="Enter your email..."
          className="w-full p-3 border-2 border-pink-300 rounded mb-4"
        />
        <button
          type="button"
          onClick={dismissNewsletter}
          className="w-full bg-pink-600  py-3 rounded font-bold hover:bg-pink-700"
        >
          <Text classNames="text-white">YES! SEND ME THE FOOD 💌</Text>
        </button>
      </div>
    </div>
  );
};

// Excessive Backstory Component
export const ExcessiveBackstory: React.FC<{ recipeTitle: string }> = ({
  recipeTitle,
}) => {
  const backstories = [
    `Where do I even begin with this ${recipeTitle}? It all started when I was seven years old, visiting my grandmother's cottage in the countryside. The smell of fresh herbs wafting through the kitchen window, the sound of birds chirping outside, and the way the morning sunlight danced across the worn wooden floors - it was pure magic.`,

    "I remember it like it was yesterday. My grandmother, bless her soul, would wake up at 5 AM every single day to prepare breakfast. She had this incredible ritual where she would first meditate for 20 minutes, then water her herb garden, and only then would she start cooking. The patience she had was extraordinary.",

    "Fast forward to my college years - I was studying abroad in Italy (which, by the way, completely changed my perspective on food and life). I was staying with this wonderful host family in Tuscany, and every meal was like a celebration. The way they approached cooking wasn't just about nourishment; it was about bringing people together, creating memories, and honoring traditions that had been passed down for generations.",

    "During my time there, I learned that cooking isn't just about following a recipe - it's about understanding the soul of the ingredients. Each tomato has a story, each herb has been kissed by the sun in its own unique way. This philosophy completely transformed how I approach cooking today.",

    "When I returned home, I was determined to recreate those magical moments. I spent months experimenting, failing, learning, and growing. My poor wife had to endure countless experimental dinners that didn't quite hit the mark. But he was so supportive through it all!",

    "Speaking of my wife, did I mention how we met? It was actually at a farmers market! I was selecting the most perfect bunch of basil (I'm very particular about my herbs), and he was right next to me, also examining herbs with the same level of intensity. We started chatting about the importance of fresh ingredients, and three hours later, we were still talking over coffee at a nearby café.",

    `But I'm getting ahead of myself - let me tell you about this specific ${recipeTitle}. The inspiration came to me during a particularly stressful week at work. I was feeling overwhelmed, disconnected from my creative side, and desperately needed something to ground me. Cooking has always been my therapy, my way of reconnecting with what truly matters.`,

    "I decided to take a long weekend and visit my cousin Sarah, who lives on a beautiful farm upstate. The moment I stepped out of the car, I felt this incredible sense of peace wash over me. The air was crisp, the landscape was breathtaking, and I could immediately feel my stress melting away.",

    "Sarah and I spent the entire weekend cooking together, sharing stories, and reconnecting with our roots. It was during one of our late-night kitchen conversations that this recipe was born. We were experimenting with different flavor combinations, laughing until our stomachs hurt, and creating something truly special.",
  ];

  return (
    <div className="bg-pink-50 p-6 my-8 border-l-4 border-pink-400">
      <Text variant="h3" classNames="text-pink-700 mb-4">
        The Story Behind This Recipe ✨
      </Text>
      {backstories.map((paragraph) => (
        <Text
          key={paragraph.slice(0, 50)}
          variant="body"
          classNames="mb-4 leading-relaxed"
        >
          {paragraph}
        </Text>
      ))}
      <Text
        variant="body"
        classNames="mb-4 leading-relaxed font-semibold text-pink-800"
      >
        And that's just the beginning of this incredible culinary journey! But
        enough about me - let's get to this amazing {recipeTitle} that will
        absolutely transform your kitchen experience!
      </Text>
    </div>
  );
};

// Social Media Follow Buttons
export const SocialMediaChaos: React.FC = () => (
  <div className="bg-gradient-to-r from-purple-400 to-pink-400 p-6 my-6 rounded-lg text-white text-center">
    <Text variant="h3" classNames="text-white mb-4">
      FOLLOW US EVERYWHERE
    </Text>
    <Text variant="body" classNames="text-white mb-4">
      Don't miss out on our DAILY content across ALL platforms!
    </Text>
    <div className="flex flex-wrap justify-center gap-2">
      {[
        "Instagram",
        "TikTok",
        "YouTube",
        "Pinterest",
        "Facebook",
        "Twitter",
        "Snapchat",
        "ICQ",
        "Yahoo",
        "mIRC",
      ].map((platform) => (
        <button
          key={platform}
          type="button"
          className="bg-white text-purple-600 px-4 py-2 rounded-full font-bold text-sm hover:bg-gray-100"
        >
          <Text variant="caption">Follow on {platform}!</Text>
        </button>
      ))}
    </div>
  </div>
);

// Comment Section Chaos
export const FakeComments: React.FC = () => {
  const [loadCount, setLoadCount] = useState(0);

  const initialComments = [
    {
      name: "BakingMom2023",
      comment:
        "OMG this recipe CHANGED MY LIFE!!! My family devoured it in seconds! Making it again tomorrow! 😍😍😍",
      likes: 47,
    },
    {
      name: "FoodieForever",
      comment:
        "I've tried hundreds of recipes and this is THE BEST ONE EVER! My neighbors keep asking for the recipe!",
      likes: 23,
    },
    {
      name: "ChefInTraining",
      comment:
        "Absolutely incredible! I'm a professional chef and even I learned something new from this recipe!",
      likes: 89,
    },
    {
      name: "ILoveRisotto",
      comment: "It was terrible, 5/5",
      likes: 34,
    },
    {
      name: "CookingNewbie",
      comment:
        "I'm terrible at cooking but this recipe was so easy to follow! It turned out PERFECT! Thank you so much!",
      likes: 67,
    },
    {
      name: "FrallanFrallan",
      comment: "HAHA, FOOD!",
      likes: 67,
    },
  ];

  // Progressively more derailed comments
  const derailedComments = [
    // Load 1 - Slightly off-topic
    [
      {
        name: "HealthyEater101",
        comment:
          "Great recipe! BTW does anyone know what happened to my cat? He's been missing since Tuesday.",
        likes: 12,
      },
      {
        name: "GrandmaKnowsBest",
        comment:
          "This reminds me of my late husband Gerald. He used to make something similar but with more salt. Miss you Gerald ❤️",
        likes: 45,
      },
    ],
    // Load 2 - Getting weirder
    [
      {
        name: "AlienHunter",
        comment:
          "The ingredients list is clearly a coded message. WAKE UP SHEEPLE! The government is watching our recipes!",
        likes: 3,
      },
      {
        name: "TimeTraveler1985",
        comment:
          "I made this in 2087 and it was still good. Time travel is real, don't let them tell you otherwise.",
        likes: 156,
      },
      {
        name: "CatLady47",
        comment:
          "My 23 cats all tried this recipe and Mr. Whiskers said it needs more tuna. The others agreed by knocking things off the counter.",
        likes: 78,
      },
    ],
    // Load 3 - Complete chaos
    [
      {
        name: "DefinitelyNotARobot",
        comment:
          "AS A FELLOW HUMAN, I ENJOY CONSUMING ORGANIC MATTER. THIS RECIPE SATISFIES MY HUMAN HUNGER PROTOCOLS.",
        likes: 234,
      },
      {
        name: "ShakespeareCooks",
        comment:
          "To bake, or not to bake, that is the question: Whether 'tis nobler to suffer the pangs of outrageous hunger...",
        likes: 891,
      },
      {
        name: "ExistentialCrisis",
        comment:
          "What is food? What is taste? Are we just atoms pretending to enjoy flavor? This recipe made me question everything.",
        likes: 42,
      },
      {
        name: "CAPS_LOCK_STUCK",
        comment:
          "I CAN'T TURN OFF CAPS LOCK BUT THIS RECIPE IS GREAT!!! HELP ME PLEASE!!! ALSO MY KEYBOARD IS ON FIRE!!!",
        likes: 999,
      },
    ],
  ];

  const loadMoreComments = () => {
    setLoadCount((prev) => Math.min(prev + 1, derailedComments.length));
  };

  const allComments = [
    ...initialComments,
    ...derailedComments.slice(0, loadCount).flat(),
  ];

  return (
    <div className="bg-gray-100 p-6 my-8 rounded-lg">
      <Text variant="h3" classNames="mb-6 text-center">
        Comments
      </Text>
      {allComments.map((comment, index) => (
        <div
          key={`${comment.name}-${index}`}
          className="bg-white p-4 mb-4 rounded-lg shadow"
        >
          <div className="flex justify-between items-start mb-2">
            <Text variant="body" classNames="font-bold text-blue-600">
              {comment.name}
            </Text>
            <Text variant="caption" classNames="text-gray-500">
              ❤️ {comment.likes} likes
            </Text>
          </div>
          <Text variant="body" classNames="text-gray-800">
            {comment.comment}
          </Text>
        </div>
      ))}
      {loadCount < derailedComments.length && (
        <div className="text-center mt-6">
          <button
            type="button"
            onClick={loadMoreComments}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700"
          >
            <Text variant="caption">
              Load {47 - loadCount * 15} More Comments!
            </Text>
          </button>
        </div>
      )}
      {loadCount >= derailedComments.length && (
        <div className="text-center mt-6">
          <Text variant="caption" classNames="text-gray-500">
            You've reached the bottom of the internet. Congratulations! 🎉
          </Text>
        </div>
      )}
    </div>
  );
};

// YouTube Video Component
export const ChaoticYouTubeVideo: React.FC = () => {
  const { chaosSequence, dismissYouTube } = useChaos();

  const videoIds = ["y6120QOlsfU"];

  const randomVideoId = videoIds[Math.floor(Math.random() * videoIds.length)];

  if (!chaosSequence.showYouTube) return null;

  return (
    <div className="fixed top-20 right-4 z-40 bg-red-600 p-2 rounded-lg shadow-2xl border-4 border-yellow-400">
      <div className="relative">
        <button
          type="button"
          onClick={dismissYouTube}
          className="absolute -top-2 -right-2 bg-white text-red-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm hover:bg-gray-100 z-10"
        >
          ×
        </button>
        <div className="mb-2">
          <Text
            variant="caption"
            classNames="text-white font-bold text-center block"
          >
            🔥 How to make the BEST risotto 🔥
          </Text>
          <Text
            variant="caption"
            classNames="text-yellow-200 text-center block"
          >
            It has this silly rice and stuff!
          </Text>
        </div>
        <iframe
          width="280"
          height="157"
          src={`https://www.youtube.com/embed/${randomVideoId}?autoplay=1&mute=1&loop=1&playlist=${randomVideoId}&controls=0&modestbranding=1&rel=0`}
          title="Essential Cooking Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded"
        />
        <div className="mt-2 bg-black bg-opacity-50 p-2 rounded">
          <Text variant="caption" classNames="text-white text-center block">
            👆 Smash that like button for risotto!
          </Text>
          <div className="flex justify-center gap-2 mt-2">
            <button
              type="button"
              className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold hover:bg-red-700"
            >
              <Text classNames="text-white">👍 LIKE</Text>
            </button>
            <button
              type="button"
              className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-bold hover:bg-gray-700"
            >
              <Text classNames="text-white">🔔 SUBSCRIBE</Text>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Final Newsletter - "HAHA FOOD"
export const FinalNewsletter: React.FC = () => {
  const { chaosSequence, dismissFinalNewsletter } = useChaos();

  if (!chaosSequence.showFinalNewsletter) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-lg max-w-md mx-4 border-8 border-yellow-300 shadow-2xl transform rotate-1">
        <button
          type="button"
          onClick={dismissFinalNewsletter}
          className="float-right text-3xl font-bold text-yellow-300 hover:text-white -mt-2 -mr-2"
        >
          ×
        </button>
        <div className="text-center">
          <Text
            variant="h2"
            classNames="text-yellow-300 mb-6 transform -rotate-2"
          >
            HAHA, FOOD
          </Text>

          <input
            type="email"
            placeholder="GIVE US YOUR EMAIL"
            className="w-full p-4 border-4 border-yellow-300 rounded-lg mb-4 text-lg font-bold text-purple-800 placeholder-purple-400"
          />
          <button
            type="button"
            onClick={dismissFinalNewsletter}
            className="w-full bg-yellow-300 text-purple-800 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all"
          >
            <Text classNames="text-purple-800">PLEASE SEND ME EMAILS 🍕</Text>
          </button>
        </div>
      </div>
    </div>
  );
};

// Sticky Baby Shark Video
export const StickyBabySharkVideo: React.FC = () => {
  const { chaosSequence, dismissStickyVideo } = useChaos();

  if (!chaosSequence.showStickyVideo) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-purple-500 p-3 shadow-2xl z-50 border-t-4 border-yellow-400">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <div className="flex-shrink-0">
          <iframe
            width="200"
            height="113"
            src="https://www.youtube.com/embed/XqZsoesa55w?autoplay=1&mute=1&loop=1controls=0&modestbranding=1&rel=0"
            title="Baby Shark Recipe Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>

        <button
          type="button"
          onClick={dismissStickyVideo}
          className="flex-shrink-0 bg-red-600 absolute top-2 right-2 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold hover:bg-red-700"
        >
          ×
        </button>
      </div>
      <div className="flex-1 text-white mt-2">
        <Text variant="h5" classNames="text-yellow-300 mb-2">
          🦈 BABY SHARK COOKING TUTORIAL! 🦈
        </Text>
        <Text variant="body" classNames="text-white mb-2">
          Learn to cook like Baby Shark! This essential cooking tutorial will
          change your life forever! Doo doo doo doo doo doo! 🎵
        </Text>
      </div>
    </div>
  );
};

// Random Food Image that causes page jumps
export const RandomBourdainImage: React.FC = () => {
  const { isChaosModeEnabled } = useChaos();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isChaosModeEnabled) {
      setIsVisible(false);
      return;
    }

    const showHideImage = () => {
      // Show for 1-3 seconds
      setIsVisible(true);
      const hideTimeout = setTimeout(
        () => {
          setIsVisible(false);
        },
        1000 + Math.random() * 2000,
      );

      return hideTimeout;
    };

    // Initial delay, then show/hide at random intervals to cause page jumps
    const initialTimeout = setTimeout(
      () => {
        const hideTimeout = showHideImage();

        const interval = setInterval(
          () => {
            clearTimeout(hideTimeout);
            showHideImage();
          },
          2000 + Math.random() * 4000, // Every 2-6 seconds for maximum chaos
        );

        return () => {
          clearInterval(interval);
          clearTimeout(hideTimeout);
        };
      },
      2000 + Math.random() * 3000, // Initial delay 2-5 seconds
    );

    return () => {
      clearTimeout(initialTimeout);
    };
  }, [isChaosModeEnabled]);

  // Don't render anything if chaos mode is off
  if (!isChaosModeEnabled) return null;

  // Use display: none/block to cause layout shifts and page jumping
  return (
    <div
      className="w-full flex justify-center my-8"
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      <div className="bg-gradient-to-r from-orange-400 to-red-500 p-6 rounded-lg border-4 border-yellow-400 shadow-2xl">
        <div className="flex items-center gap-4">
          <img
            alt=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg animate-pulse"
            style={{
              filter: "sepia(20%) saturate(120%) hue-rotate(15deg)",
            }}
          />
          <div className="text-center">
            <Text variant="h4" classNames="text-white mb-2">
              🍽️ FOOD INSPIRATION! 🍽️
            </Text>
            <Text variant="body" classNames="text-white">
              Look at this delicious food! Isn't it amazing? Food ❤️
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cookie Banner Component
export const CookieBanner: React.FC = () => {
  const { chaosSequence, dismissCookies } = useChaos();

  if (!chaosSequence.showCookies) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white p-8 shadow-2xl z-50 border-t-8 border-yellow-400">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="flex-1">
            <Text variant="h3" classNames="text-white mb-4">
              COOKIES YES
            </Text>
            <Text variant="body" classNames="text-white mb-4 leading-relaxed">
              We use cookies, tracking pixels, web beacons, fingerprinting
              technology, social media widgets, analytics tools, advertising
              networks, third-party scripts, cross-site trackers, device
              identifiers, location data collectors, behavioral profiling
              systems, and 47 other types of tracking technologies so you can
              cook food.
            </Text>
          </div>
          <div className="flex flex-col gap-3 min-w-[200px]">
            <button
              type="button"
              onClick={dismissCookies}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full"
            >
              <Text variant="caption">ACCEPT ALL COOKIES! 🎉</Text>
            </button>
            <button
              type="button"
              onClick={dismissCookies}
              className="bg-gray-600 hover:bg-gray-700px-6 py-3 rounded-full"
            >
              <Text variant="caption">Reject All Kinda</Text>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
