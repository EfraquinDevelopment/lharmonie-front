import React from "react";

type Props = {
  className?: string;
};

function Croissant({ className }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24px"
      height="24px"
      viewBox="0 0 100 100"
      version="1"
    >
      <path
        d="M5530 4645c-80-16-127-33-211-75-76-38-99-57-99-80 0-13-11-19-43-24-103-16-231-109-270-196-11-25-34-57-52-72-55-46-85-119-85-206 0-102 16-157 59-202 65-68 162-73 214-10 14 16 27 33 29 39 2 5 31 3 73-5 82-16 266-19 313-5 63 19 62 25 62-259v-257l31-7c49-10 135-7 166 5 15 6 64 12 109 12 52 1 87 7 97 16 28 23 21 67-18 110l-35 38v310l78 16c46 10 98 29 126 47 25 17 57 30 70 30 12 0 43 7 69 16 42 14 48 14 71-2 34-22 99-14 131 16 37 35 47 72 44 157-5 94-37 167-88 198-18 11-59 46-90 77-53 53-147 108-186 108-8 0-45 31-82 69-38 37-92 80-120 95-107 53-232 68-363 41zm333-58c97-48 195-149 227-233 50-136 73-301 51-382-26-94-107-145-260-162-96-11-291 0-347 20-29 10-30 11-42 123-27 255-106 439-219 508l-36 23 33 27c36 30 162 85 244 106 31 7 95 11 163 10 106-3 115-5 186-40zm-569-177c95-87 149-245 180-522l5-47-57-12c-61-12-172-8-279 12-58 10-63 13-63 38-1 50-29 161-55 214-15 28-45 71-68 95l-42 43 24 45c50 93 148 149 304 173 4 0 27-17 51-39zm874-26c103-51 182-175 182-285 0-94-49-155-153-190-29-10-53-16-55-15-1 2 5 19 13 39 34 83 9 331-45 437-25 49-16 51 58 14zm243-220c25-55 34-143 20-186-21-65-86-103-126-74-20 14-19 15 7 39 60 55 80 141 54 230-9 30-16 58-16 63 0 17 44-35 61-72zm-1445-25c47-65 74-138 81-221 7-80-7-123-48-143-86-45-176 18-199 140-15 77-8 139 19 194 24 46 76 92 96 85 8-4 31-28 51-55zm672-355c9-2 12-45 12-169v-165l40-40c46-46 54-86 17-95-12-3-54-5-92-3l-70 3-3 243-2 242 42-6c24-3 49-7 56-10zm82-179c0-173 0-175-20-163-19 12-20 24-20 175 0 156 1 163 20 163s20-7 20-175zm120 11v-164l25-16c14-9 33-33 43-52 21-46 10-54-79-54-61 0-67 2-73 23-3 12-6 113-6 225v202h90v-164z"
        transform="matrix(.1 0 0 -.1 0 794)"
      ></path>
      <path
        d="M5895 4264c-34-34 3-105 39-75 19 16 21 62 4 79-16 16-23 15-43-4zM5686 4251c-20-22-21-51-2-76 17-23 43-14 56 20 18 47-23 90-54 56zM5890 4075c0-22-37-55-60-55-12 0-31 11-44 25s-26 25-30 25c-14 0-4-28 17-48 32-30 87-29 115 1 22 24 30 67 12 67-5 0-10-7-10-15z"
        transform="matrix(.1 0 0 -.1 0 794)"
      ></path>
    </svg>
  );
}

export default Croissant;
