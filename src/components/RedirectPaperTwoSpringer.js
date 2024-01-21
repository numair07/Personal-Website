import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectPaperTwoSpringer() {
  const navigate = useNavigate();

  useEffect(() => {
    window.location.href = "https://link.springer.com/article/10.1007/s41870-023-01692-y";
  }, []);

  return null; // Nothing to render as redirection is immediate
}

export default RedirectPaperTwoSpringer;
