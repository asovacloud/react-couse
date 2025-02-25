import { useState } from 'react';

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((state) => !state);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    setPlayerName(value);
  };

  let editPlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = 'Edit';

  if (isEditing) {
    editPlayerName = (
      <input
        type="text"
        value={playerName}
        required
        onChange={handleInputChange}
      />
    );
    btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : null}>
      <span className="player">
        {editPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
};

export default Player;
