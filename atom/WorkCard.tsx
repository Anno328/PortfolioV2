import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

function WorkCard(props: any) {
  const { t } = useTranslation();
  return (
    <div className="my-8 shadow-2xl border-0 p-4" onClick={props.onClick}>
      <Image src={props.imgUrl} alt="logo" width={150} height={150} />
      <div className="inline-block text-center">
        <p className="text-base">{props.title}</p>
        <p className="text-sm my-8">{props.description}</p>
        {props.link ? (
          <a
            className="mt-2 px-2 py-1 text-xs text-blue-600 underline bg-transparent rounded hover:text-blue-800 transition border-none shadow-none my-4 block md:text-xs"
            target="_blank"
            href={props.link}
          >
            {t("workCardDetail")}
          </a>
        ) : (
          <></>
        )}
        {props.showDetailButton ? (
          <button
            className="mt-2 px-2 py-1 text-xs text-blue-600 underline bg-transparent rounded hover:text-blue-800 transition border-none shadow-none"
            style={{ minWidth: "auto" }}
            onClick={(e) => {
              e.stopPropagation();
              props.onDetailClick && props.onDetailClick();
            }}
          >
            {t("workCardDetail")}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default WorkCard;
