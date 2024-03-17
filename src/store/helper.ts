export class Option {
  optionText: string;
  isCorrect: boolean;

  constructor(option: string, isCorrect: boolean) {
    this.optionText = option;
    this.isCorrect = isCorrect;
  }
}
