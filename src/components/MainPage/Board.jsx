import React from "react";
import styled from "styled-components";
import ArrowBtn from "./ArrowBtn";
import { useNavigate } from "react-router-dom";

const Board = ({ id, list }) => {
  const navigate = useNavigate();
  return (
    <Div>
      <ArrowBtn
        title={id === 0 ? "건의해요" : "고마워요"}
        onClick={() => {
          id === 0 ? navigate(`/suggest`) : navigate(`/appreciate`);
        }}
      />

      <Container>
        {list.map(el => {
          return (
            <div
              key={el.postId}
              className="row"
              onClick={() => {
                id === 0
                  ? navigate(`/suggest/${el.postId}`)
                  : navigate(`/appreciate/${el.postId}`);
              }}
            >
              {el.title}
            </div>
          );
        })}
      </Container>
    </Div>
  );
};

export default Board;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Container = styled.div`
  display: flex;
  padding: 12px 8px;
  flex-direction: column;
  box-sizing: border-box;
  align-items: start;
  gap: 8px;
  border-radius: 4px;
  background: var(--theme_grey1_grey3);

  .row {
    overflow: hidden;
    font-variant-numeric: lining-nums tabular-nums;
    text-overflow: ellipsis;

    font-size: 14px;
    font-weight: 400;
  }
`;
