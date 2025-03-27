const pool = require('../config/db');

class ContactModel {
  static async save(contact) {
    const { name, email, message } = contact;
    const query = `
      INSERT INTO contacts (name, email, message)
      VALUES ($1, $2, $3) RETURNING *`;
    const values = [name, email, message];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = ContactModel;
