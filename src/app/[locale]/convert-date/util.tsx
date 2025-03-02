export class DateConverter {
    private static monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    private static daysInMonth = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
  
    public static options = [
      { id: "shamsi", label: "شمسی به میلادی و قمری" },
      { id: "miladi", label: "میلادی به شمسی و قمری" },
      { id: "ghamari", label: "قمری به شمسی و میلادی" },
    ];
  
    public static convertDate(type: string, year: number, month: number, day: number) {
      switch (type) {
        case "shamsi":
          return this.convertShamsiToMiladiAndGhamari(year, month, day);
        case "miladi":
          return this.convertMiladiToShamsiAndGhamari(year, month, day);
        case "ghamari":
          return this.convertGhamariToShamsiAndMiladi(year, month, day);
        default:
          return {};
      }
    }
  
    private static convertShamsiToMiladiAndGhamari(year: number, month: number, day: number) {
      const miladiYear = year + 621;
      const ghamariYear = year + 622;
  
      return {
        miladi: this.formatDate(miladiYear, month, day),
        ghamari: this.formatDate(ghamariYear, month, day),
      };
    }
  
    private static convertMiladiToShamsiAndGhamari(year: number, month: number, day: number) {
      const shamsiYear = year - 621;
      const ghamariYear = year - 1;
  
      return {
        shamsi: this.formatDate(shamsiYear, month, day),
        ghamari: this.formatDate(ghamariYear, month, day),
      };
    }
  
    private static convertGhamariToShamsiAndMiladi(year: number, month: number, day: number) {
      const shamsiYear = year - 622;
      const miladiYear = year + 1;
  
      return {
        shamsi: this.formatDate(shamsiYear, month, day),
        miladi: this.formatDate(miladiYear, month, day),
      };
    }
  
    private static formatDate(year: number, month: number, day: number) {
      const longFormat = `${year} ${this.monthNames[month - 1]} ${day}`;
      const shortFormat = `${String(year).slice(-2)}/${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`;
  
      return {
        longFormat,
        shortFormat,
        year,
        month,
        day,
      };
    }
  
    public static getDaysInMonth(year: number, month: number) {
      return this.daysInMonth[month - 1] || 30;
    }
  }