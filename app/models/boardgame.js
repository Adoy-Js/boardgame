const db = require("../database");

class NoBoardgameError extends Error {
  constructor(id) {
    super(`No boardgame found with id ${id}`);
  }
}

class Boardgame {
  constructor(data = {}) {
    for (const prop in data) {
      this[prop] = data[prop];
    }
  }

  static async findAll() {
    try {
      const { rows } = await db.query("SELECT * FROM boardgame");
      return rows.map((row) => new Boardgame(row));
    } catch (error) {
      if (error.detail) {
        throw new Error(error.detail);
      } else {
        throw error;
      }
    }
  }

  static async findOne(id) {
    try {
      const { rows } = await db.query(`SELECT * FROM boardgame WHERE id=$1`, [
        id,
      ]);
      if (rows[0]) {
        return new Boardgame(rows[0]);
      } else {
        throw new NoBoardgameError(id);
      }
    } catch (error) {
      if (error.detail) {
        throw new Error(error.detail);
      } else {
        throw error;
      }
    }
  }

  async save() {
    try {
      if(this.id){

      }else{
        const {rows} = db.query(`SELECT add_boardgame($1, $2, $3, $4, $5, $6) AS id`, [
          this.name,
          this.author, 
          this.editor,
          this.min_players,
          this.max_players,
          this.min_age
        ]);
      }
    } catch (error) {
      if (error.detail) {
        throw new Error(error.detail);
      } else {
        throw error;
      }
    }
  }
}
