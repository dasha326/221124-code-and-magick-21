'use strict';
const CLOUD_POSITION_X = 100;
const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 279;
const COLUMN_WIDTH = 40;
const COLUMN_LIST_HEIGTH = 150;
const POINTS_POSITION_Y = 100;
const COLUMN_POSITION_Y = POINTS_POSITION_Y + 10;
const TEXT_POSITION_Y = COLUMN_POSITION_Y + COLUMN_LIST_HEIGTH + 20;
const COLUMN_GAP = 50;
const CURRENT_PLAYER_COLUMN_COLOR = '#ff0000';

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
let renderPoints = function (ctx, positionX, points) {
  ctx.fillStyle = '#000000';
  ctx.fillText(points, positionX, POINTS_POSITION_Y);
};
let renderColumn = function (ctx, positionX, positionY, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(positionX, positionY, COLUMN_WIDTH, height);
};
let renderName = function (ctx, positionX, name) {
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText(name, positionX, TEXT_POSITION_Y);
};
let getMaxElement = function (arr) {
  let maxElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  const maxPoint = getMaxElement(times);
  renderCloud(ctx, CLOUD_POSITION_X + 10, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_POSITION_X, 10, '#ffffff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText('Список результатов:', 110, 70);

  let positionX = CLOUD_POSITION_X;

  for (let i = 0; i < times.length; i++) {
    let columnHeight = times[i] * 100 / maxPoint;
    let positionY = COLUMN_POSITION_Y + (COLUMN_LIST_HEIGTH - columnHeight);
    let color = '';
    if (names[i] === 'Вы') {
      color = CURRENT_PLAYER_COLUMN_COLOR;
    } else {
      color = 'hsl(240, 20%, ' + columnHeight + '%)';
      console.log(color);
    }
    if (i === 0) {
      positionX += 10;
    } else {
      positionX += COLUMN_WIDTH + COLUMN_GAP;
    }
    let points = Math.round(times[i]);

    renderPoints(ctx, positionX, points);
    renderColumn(ctx, positionX, positionY, columnHeight, color);
    renderName(ctx, positionX, names[i]);
  }
};

