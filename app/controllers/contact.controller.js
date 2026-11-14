let contacts = [];
let nextId = 1;

// Tạo liên hệ
exports.create = (req, res) => {
  const contact = {
    id: nextId++,
    ...req.body,
  };
  contacts.push(contact);
  res.status(201).json(contact);
};

// Lấy tất cả liên hệ
exports.findAll = (req, res) => {
  res.json(contacts);
};

// Lấy một liên hệ
exports.findOne = (req, res) => {
  const contact = contacts.find(c => c.id === Number(req.params.id));
  if (!contact) return res.status(404).json({ message: "Contact not found" });
  res.json(contact);
};

// Cập nhật liên hệ
exports.update = (req, res) => {
  const contact = contacts.find(c => c.id === Number(req.params.id));
  if (!contact) return res.status(404).json({ message: "Contact not found" });
  Object.assign(contact, req.body);
  res.json(contact);
};

// Xóa một liên hệ
exports.delete = (req, res) => {
  const index = contacts.findIndex(c => c.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Contact not found" });
  contacts.splice(index, 1);
  res.json({ message: "Contact deleted successfully" });
};

// Xóa tất cả liên hệ
exports.deleteAll = (req, res) => {
  contacts = [];
  res.json({ message: "All contacts deleted successfully" });
};

// Lấy liên hệ yêu thích
exports.findAllFavorite = (req, res) => {
  res.json(contacts.filter(c => c.favorite === true));
};