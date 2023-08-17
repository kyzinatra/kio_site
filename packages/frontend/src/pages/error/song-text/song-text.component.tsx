import css from './song-text.module.css';

export const SongText = () => {
  return (
    <p className={css.songText}>
      <span>When you're at the end of the road</span>
      <span>And you lost all sense of control</span>
      <span>And your thoughts have taken their toll</span>
      <span>When your mind breaks the spirit of your soul</span>
    </p>
  );
};
