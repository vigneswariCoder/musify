import React, { useState } from 'react';
import { IconButton, keyframes } from '@mui/material';
import { Heart } from 'lucide-react';

const popAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

interface LikeButtonProps {
  liked?: boolean;
  onToggle: () => void;
  showAnimation?: boolean;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  liked = false,
  onToggle,
  showAnimation = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (showAnimation) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 300);
    }
    onToggle();
  };

  return (
    <IconButton
      onClick={handleClick}
      sx={{
        animation: isAnimating ? `${popAnimation} 0.3s ease-in-out` : 'none',
        color: liked ? 'primary.main' : 'inherit',
      }}
    >
      <Heart fill={liked ? 'currentColor' : 'none'} />
    </IconButton>
  );
};

export default LikeButton;