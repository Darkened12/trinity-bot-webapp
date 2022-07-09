export interface ICharacterNames {
    gamePrefix: string,
    characterNames: string[],
  }

export interface ICharacter {
  name: string,
  health: string,
  combo_rate: string,
  jump_startup: string,
  dash: string,
  unique_movement: string,
  notes: string,
  color: string,
  icon: string,
}

export interface IMove {
  move_name: string,
  damage: string,
  cancel: string,
  prorate: string,
  attribute: string,
  guard: string,
  startup: string,
  active: string,
  recovery: string,
  frame_adv: string,
  level: string,
  starter: string,
  blockstun: string,
  hitstun: string,
  untechable: string,
  hitstunch: string,
  untechch: string,
  blockstop: string,
  hitstop: string,
  chstop: string,
  invul: string,
  type: string,
  notes: string,
  sprite: string
}