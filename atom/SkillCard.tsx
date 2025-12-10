import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

function SkillCard(props: any) {
  return (
    <div className="inline-block m-4 p-4 shadow-xl border-0 rounded w-auto">
      <p className="text-base font-black my-2 md:text-sm">{props.skillName}</p>
      {props.imgUrl ? (
        <Image src={props.imgUrl} alt="logo" width={50} height={50} />
      ) : (
        <></>
      )}
      <Box
        className="md:text-sm"
        component="fieldset"
        mb={3}
        borderColor="transparent"
      >
        <Rating name="read-only" value={props.level} readOnly size="small" />
        <p className="text-sm">{props.years}years</p>
      </Box>
    </div>
  );
}

export default SkillCard;
