body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #f0f0f0;
}

h1 {
    margin-bottom: 20px;
}

#game-board {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    gap: 10px;
}

.card {
    width: 100px;
    height: 100px;
    background-color: #FF1493;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    user-select: none;
    perspective: 1000px; /* for 3D flip effect */
    border: 3px solid lightgreen; /* initial border color */
    transition: border-color 0.5s; /* smooth transition */
}

.card-inner {
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
}

.card.flip .card-inner {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
}

.card-front {
    background-color: #FF1493; /* front color */
    color: white;
}

.card-back {
    background-color: #8BC34A; /* back color */
    color: black;
    transform: rotateY(180deg);
}

.card.matched .card-inner {
    background-color: #8BC34A; /* matched color */
    transform: rotateY(0deg);
    cursor: default;
}

.card.flipped-border {
    border-color: yellow; /* border color after flip */
}
