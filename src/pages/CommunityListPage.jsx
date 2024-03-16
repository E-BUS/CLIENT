import React, { useState, useEffect } from "react";
import Header from "../components/common/Header";
import TitleSection from "../components/LostItemPage/TitleSection";
import Item from "../components/CommunityPage/Item";

const CommunityListPage = () => {
  const isNotice = window.location.pathname.includes("notice");
  const isSuggest = window.location.pathname.includes("suggest");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (isNotice) {
    } else if (isSuggest) {
      // 건의사항 api
    } else {
    }
  }, [isNotice, isSuggest]);
  return (
    <>
      <Header />
      <TitleSection
        title={isNotice ? "공지사항" : isSuggest ? "건의해요" : "감사해요"}
        text={
          isNotice
            ? "공지사항 작성하기"
            : isSuggest
            ? "건의사항 작성하기"
            : "글 작성하기"
        }
        moveTo={
          isNotice
            ? "/notice/new"
            : isSuggest
            ? "/suggest/new"
            : "/appreciate/new"
        }
      />
      {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((el, idx) => (
        <Item
          type={isNotice ? "notice" : isSuggest ? "suggest" : "appreciate"}
          item={el}
          isFirst={idx === 0}
          key={0}
        />
      ))}
      <br />
    </>
  );
};

export default CommunityListPage;
