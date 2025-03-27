const ContactModel = require('../models/contactModel');

class ContactController {
  static async saveContact(req, res) {
    try {
      console.log('✏️ [CONTACT] Salvando contato...');
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        console.warn('⚠️ [CONTACT] Campos obrigatórios ausentes.');
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      }

      const savedContact = await ContactModel.save({ name, email, message });
      console.log(`✅ [CONTACT] Contato salvo:`, savedContact);

      return res.status(201).json({ message: 'Contato salvo com sucesso!', contact: savedContact });
    } catch (error) {
      console.error('❌ [CONTACT] Erro ao salvar contato:', error.message);
      return res.status(500).json({ error: 'Erro interno do servidor.' });
    }
  }
}

module.exports = ContactController;
