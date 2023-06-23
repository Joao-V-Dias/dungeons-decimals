const collisions = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 1864, 1864,
  1864, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0,
  0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864, 1864, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 1864,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864,
  0, 0, 0, 0, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 0, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0,
  0, 0, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864,
  0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 1864,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 1864, 1864, 1864, 0, 0, 0, 1864, 1864,
  1864, 1864, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 1864, 1864, 1864,
  1864, 1864, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1864, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0,
  1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1864, 0, 0, 1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0,
  0, 0, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 1864, 0,
  0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1864, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0,
  1864, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0,
  0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864,
  1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 1864, 0, 0, 0, 0,
  1864, 1864, 1864, 0, 0, 1864, 1864, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 1864, 1864, 1864,
  1864, 1864, 1864, 0, 0, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864,
  0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0,
  0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0,
  0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0,
  0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 1864,
  0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864,
  1864, 1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0,
  0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 1864, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1864, 1864, 1864, 1864, 1864, 1864, 1864,
  1864, 1864, 1864, 1864, 1864, 1864, 1864, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const perguntas = [
  {
    questao: "2 + 2",
    alternativa: ["1", "2", "3", "4"],
    resposta: "3",
  },
  {
    questao: "5 x 3",
    alternativa: ["15", "16", "20", "48"],
    resposta: "0",
  },
  {
    questao: "10 - 3",
    alternativa: ["1", "5", "9", "7"],
    resposta: "3",
  },
  {
    questao: "4 / 2",
    alternativa: ["10", "2", "20", "48"],
    resposta: "1",
  },
  {
    questao: "8 + 5",
    alternativa: ["12", "22", "31", "13"],
    resposta: "3",
  },
  {
    questao: "4-2",
    alternativa: ["4", "2", "20", "48"],
    resposta: "1",
  },
  {
    questao: "2 X 7",
    alternativa: ["13", "14", "32", "42"],
    resposta: "1",
  },
  {
    questao: "10 x 10",
    alternativa: ["10", "2", "20", "48"],
    resposta: "0",
  },
  {
    questao: "2 X 10",
    alternativa: ["1", "20", "2", "42"],
    resposta: "1",
  },
  {
    questao: "Qual é o valor de x em x + 3 = 8",
    alternativa: ["5", "2", "20", "4"],
    resposta: "0",
  },
  {
    questao: "4³",
    alternativa: ["12", "66", "34", "64"],
    resposta: "3",
  },
  {
    questao: "Raiz quadrada de 36",
    alternativa: ["12", "23", "6", "18"],
    resposta: "2",
  },
  {
    questao: "15% de 10",
    alternativa: ["14", "2", "51", "15"],
    resposta: "3",
  },
  {
    questao: "7 - 4",
    alternativa: ["4", "3", "20", "48"],
    resposta: "1",
  },
  {
    questao: "20 / 2",
    alternativa: ["1", "22", "10", "42"],
    resposta: "2",
  },
  {
    questao: "Qual é o valor de x em 2x + 5 = 15",
    alternativa: ["5", "2", "20", "48"],
    resposta: "0",
  },
  {
    questao: "3 vezes a raiz de 9",
    alternativa: ["6", "2", "3", "9"],
    resposta: "3",
  },
  {
    questao: "16 / 4",
    alternativa: ["2", "4", "20", "48"],
    resposta: "1",
  },
  {
    questao: "Qual o valor de x em 3x - 7 = 8",
    alternativa: ["10", "5", "15", "3"],
    resposta: "1",
  },
  {
    questao: "0¹²",
    alternativa: ["1", "12", "0", "48"],
    resposta: "0",
  },
  {
    questao: "2 + 2",
    alternativa: ["1", "2", "3", "4"],
    resposta: "3",
  },
  {
    questao: "4!",
    alternativa: ["4", "24", "20", "48"],
    resposta: "1",
  },
  {
    questao: "Raiz de 144",
    alternativa: ["68", "14", "12", "64"],
    resposta: "2",
  },
  {
    questao: "Logaritmo de 1",
    alternativa: ["0", "1", "10", "10"],
    resposta: "0",
  },
  {
    questao: "1 x 2 x 19 x 8 x 0",
    alternativa: ["1824", "38", "3", "0"],
    resposta: "3",
  },
  {
    questao: "4-2",
    alternativa: ["4", "2", "20", "48"],
    resposta: "1",
  },
  {
    questao: "5 X 2",
    alternativa: ["11", "5", "10", "2"],
    resposta: "2",
  },
  {
    questao: "Qual é o triplo de 6",
    alternativa: ["10", "2", "18", "48"],
    resposta: "2",
  },
  {
    questao: "Qual a raiz 16",
    alternativa: ["1", "2", "3", "4"],
    resposta: "3",
  },
  {
    questao: "9 - 6",
    alternativa: ["4", "3", "15", "5"],
    resposta: "1",
  },
  {
    questao: "Raiz cúbica de 8",
    alternativa: ["1", "2", "3", "4"],
    resposta: "1",
  },
  {
    questao: "4² - 2²",
    alternativa: ["4", "12", "2", "14"],
    resposta: "1",
  },
  {
    questao: "2 + 1",
    alternativa: ["1", "2", "3", "4"],
    resposta: "2",
  },
  {
    questao: "5 x 6",
    alternativa: ["15", "30", "20", "48"],
    resposta: "2",
  },
  {
    questao: "10 - 2",
    alternativa: ["1", "5", "9", "8"],
    resposta: "3",
  },
  {
    questao: "8 / 2",
    alternativa: ["10", "6", "4", "48"],
    resposta: "2",
  },
  {
    questao: "8 + 4",
    alternativa: ["12", "22", "31", "13"],
    resposta: "0",
  },
  {
    questao: "4-11",
    alternativa: ["-7", "2", "20", "48"],
    resposta: "0",
  },
  {
    questao: "2 X 7",
    alternativa: ["13", "14", "32", "42"],
    resposta: "1",
  },
  {
    questao: "10 x 10",
    alternativa: ["10", "2", "20", "48"],
    resposta: "0",
  },
  {
    questao: "5 X 10",
    alternativa: ["50", "20", "2", "42"],
    resposta: "0",
  },
  {
    questao: "Qual é o valor de x em x + 3 = 80",
    alternativa: ["77", "2", "20", "4"],
    resposta: "0",
  },
  {
    questao: "5³",
    alternativa: ["12", "66", "34", "125"],
    resposta: "3",
  },
  {
    questao: "Raiz quadrada de 81",
    alternativa: ["12", "23", "9", "18"],
    resposta: "2",
  },
  {
    questao: "50% de 10",
    alternativa: ["14", "50", "51", "15"],
    resposta: "1",
  },
  {
    questao: "7 - 7 X 1",
    alternativa: ["0", "1", "20", "48"],
    resposta: "1",
  },
  {
    questao: "20 / 10",
    alternativa: ["1", "22", "2", "42"],
    resposta: "2",
  },
  {
    questao: "Qual é o valor de x em 4x + 5 = 25",
    alternativa: ["5", "2", "20", "48"],
    resposta: "0",
  },
  {
    questao: "3 vezes a raiz de 4",
    alternativa: ["12", "2", "3", "6"],
    resposta: "3",
  },
  {
    questao: "16 / 8",
    alternativa: ["4", "2", "20", "48"],
    resposta: "1",
  },
  {
    questao: "Qual o valor de x em 3x - 10 = 14",
    alternativa: ["10", "8", "15", "3"],
    resposta: "1",
  },
  {
    questao: "1¹³",
    alternativa: ["1", "12", "13", "48"],
    resposta: "0",
  },
  {
    questao: "2 + 2",
    alternativa: ["1", "2", "3", "4"],
    resposta: "3",
  },
  {
    questao: "3! X 2",
    alternativa: ["4", "12", "20", "48"],
    resposta: "1",
  },
  {
    questao: "Valor mais proximo de π",
    alternativa: ["3.147", "3.146", "3.141", "3.144"],
    resposta: "2",
  },
  {
    questao: "Logaritmo de 1",
    alternativa: ["0", "1", "10", "10"],
    resposta: "0",
  },
  {
    questao: "1 x 2 x 10 x 8",
    alternativa: ["1824", "38", "160", "0"],
    resposta: "3",
  },
  {
    questao: "4-1",
    alternativa: ["4", "3", "20", "48"],
    resposta: "1",
  },
  {
    questao: "5 X 3",
    alternativa: ["11", "5", "15", "2"],
    resposta: "2",
  },
  {
    questao: "9 X 20",
    alternativa: ["10", "2", "180", "48"],
    resposta: "2",
  },
  {
    questao: "Qual a raiz 25",
    alternativa: ["1", "2", "4", "5"],
    resposta: "3",
  },
  {
    questao: "20 - 6",
    alternativa: ["4", "14", "15", "5"],
    resposta: "1",
  },
  {
    questao: "Raiz cúbica de 27",
    alternativa: ["1", "2", "3", "4"],
    resposta: "2",
  },
  {
    questao: "5² - 2²",
    alternativa: ["4", "12", "21", "14"],
    resposta: "2",
  },
];

const textoInimigo = {
  galileu: [
    "Ora ora, quem temos aqui? Nunca vi alguém como você por aqui, será que é outro teste da igreja? Não, eles não usam estes uniforme",
    "Essas roupas na verdade parecem com a do alquimista que chegou recentemente, ele tem nos causado muitos problemas",
    "Desculpe garoto, mas pelo bem de todos aqui não posso entregar essa peça pra você",
  ],
  lobisomen: [
    "O que? Quem é você e que roupas são essas?Ah, você é amigo daquele alquimista pirado?",
    "Aquele maluco quase nos matou, ele juntou a gente e falou de uma maquina estranha que nunca ouvi falar, mas é obvio que o Papa não vai tolerar isso",
    "De qualquer forma, se quiser mesmo ajudar aquele lunático, vai ter quepassar por mim primeiro",
  ],

  bonzyBuddy: [
    "Bonzy Buddy quer ficar sozinho agora",
    "Bonzy Buddy não vai te dar peça, peça é ruim pra nós, os irmãos falaram!!",
    "Bonzy Buddy vai acabar com você",
  ],

  siameses: [
    "Oh céus, uma criança aqui! Como você veio parar aqui jovem? Deve ter caído em mais uma das armadilhas do novo papado, aqueles repugnates!",
    "Ahn? Quer essa peça? Garoto não posso te entregar isso, nossa vida correra perigo, na verdade, como sabe dela? Está trabalhando para aquele cientista?",
    "Que pena, rapaz, você tinha um futuro inteiro pela frente, adeus",
  ],

  cientista: [
    "Ah, olá jovem, você conseguiu as peças que eu queria? Muito bem, sabia que podia contar com você",
    "Agora é só juntar isso com isso, aquilo com isso e mais isso e",
    "VOALA",
    "Está pronta, a maquina que vai me tirar dessa bagunça, agora finalmente vou poder encontrar meu filho perdido de novo",
    "Ah sim, lhe devo algumas explicações!, mesmo sabendo que não vai entender",
    "Eu cheguei em casa e encontrei minha maquina do tempo completamente destruída e com claros sinais de uso, também não encontrei meu filho depois disso e só juntei os fatos",
    "Desde então eu estive vagando pelas eras a procura dele, até que fiquei preso aqui, e agora nem lembro mais como era o rosto dele",
    "Sinto muito garoto, mas só tem carga pra uma pessoa, e preciso encontrar meu filho",
  ],
};
