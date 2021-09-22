import React, { FormEvent, useState, ChangeEvent } from 'react';
import './MovieInfoForm.css';

type MovieInfoFormProps = {
  onSubmitMoviename: (moviename: string) => void;
};

function MovieInfoForm({ onSubmitMoviename }: MovieInfoFormProps) {
  const [input, setInput] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitMoviename(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form className="MovieInfoForm" onSubmit={onSubmit}>
      <input onChange={onChange} value={input} placeholder="영화 이름을 입력하세요." />
      <button type="submit">조회</button>
    </form>
  );
}

export default MovieInfoForm;