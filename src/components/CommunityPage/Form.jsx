import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../assets/arrow_bold.svg";
import { postNotice } from "../../services/api/notice";
import { postPost } from "../../services/api/post";

const Form = () => {
  const isNotice = window.location.pathname.includes("notice");
  const isSuggest = window.location.pathname.includes("suggest");
  const nav = useNavigate();
  const [post, setPost] = useState({ title: "", content: "" });
  const onSubmit = () => {
    if (isNotice) {
      postNotice(post)
        .then(res => nav(`/notice/${res.data.noticeId}`))
        .catch(res => console.log(res));
    } else {
      postPost(isSuggest ? "suggestion" : "appreciation", post)
        .then(res =>
          nav(`/${isSuggest ? "suggest" : "appreciate"}/${res.data.postId}`),
        )
        .catch(err => console.log(err));
    }
  };
  return (
    <>
      <SubTitle>
        {isNotice ? "공지사항" : isSuggest ? "건의" : "글"}
        {" 제목"}
      </SubTitle>
      <Input
        placeholder="제목을 입력하세요"
        maxLength={30}
        value={post.title}
        onChange={e => setPost({ ...post, title: e.target.value })}
      />
      <SubTitle>
        {isNotice ? "공지사항" : isSuggest ? "건의" : "글"}
        {" 내용"}
      </SubTitle>
      <Textarea
        placeholder="내용을 입력하세요"
        maxLength={100}
        value={post.content}
        onChange={e => setPost({ ...post, content: e.target.value })}
      />
      <Submit onClick={onSubmit}>
        <p>
          {isNotice ? "작성" : isSuggest ? "건의" : "글 작성"}
          {" 완료하기"}
        </p>
        <Arrow />
      </Submit>
    </>
  );
};

export default Form;

const SubTitle = styled.p`
  color: var(--black);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  margin: 8px;
`;

const Input = styled.input`
  width: calc(100% - 16px);
  color: var(--black);
  background-color: transparent;
  border: 0;
  outline: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  font-family: Pretendard-regular;
  border-bottom: 1px solid var(--black);
  padding: 8px;
  padding-bottom: 6px;
  margin-bottom: 32px;
`;

const Textarea = styled.textarea`
  width: calc(100% - 16px);
  min-height: 60px;
  color: var(--black);
  background-color: var(--grey1);
  resize: none;
  border: 0;
  outline: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  font-family: Pretendard-regular;
  line-height: 20px;
  padding: 8px;
`;

const Submit = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  position: absolute;
  bottom: 100px;
  right: 32px;
  p {
    color: var(--black);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }
  svg {
    padding: 0;
    height: 14px;
  }
`;
