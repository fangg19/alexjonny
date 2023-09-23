export function cls(...args: any[]): string {
  // DO NOT change this to use Array.filter or other methods
  let s = "";
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] == "string" && arguments[i]) {
      s = s + " " + arguments[i];
    }
  }
  return s.substr(1);
}

export function scrollToElement(elementId: string, isMobile?: boolean) {
  console.log("isMobile", isMobile);
  if (!elementId) return;
  const elementToSCroll = document.getElementById(elementId);

  window.scrollTo({
    top:
      elementToSCroll && !isMobile
        ? elementToSCroll.offsetTop - 140
        : elementToSCroll && isMobile
        ? elementToSCroll.offsetTop - 40
        : 0,
    behavior: "smooth",
  });
}

export const getAge = (): number => {
  let age;
  const yearOfBirth = new Date("13 Nov, 1994").getFullYear();
  const currentDate = new Date();
  if (currentDate.getMonth() + 1 < 11) {
    age = currentDate.getFullYear() - yearOfBirth - 1;
  } else {
    age = currentDate.getFullYear() - yearOfBirth;
  }
  return age;
};

export const INTERNAL_NAV_LINKS = [
  {
    name: "about",
  },
  {
    name: "work",
  },
  {
    name: "contact",
  },
];

export const EXTERNAL_NAV_LINKS = [
  {
    name: "github",
    url: "https://github.com/fangg19",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/alexandru-jonny-%C5%9Ferban-977b1014b/",
  },
  {
    name: "resume",
    url: "https://www.linkedin.com/in/alexandru-jonny-%C5%9Ferban-977b1014b/",
  },
];

const randomColors: string[] = [
  "red-500",
  "yellow-500",
  "green-500",
  "blue-500",
  "indigo-500",
  "purple-500",
  "pink-500",
];

export function getRandomColor(): string {
  return randomColors[Math.floor(Math.random() * randomColors.length)];
}
