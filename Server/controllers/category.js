import category from "../models/category.js"

export const getCategory = async (req, res) => {
    try {
      const response = await category.findAll();
      res.status(200).json(response);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
    
}

export const getCategoryById = async (req, res) => {
  try {
    const response = await category.findOne({
        where: {
            uuid: req.params.id
        }
    });
    res.status(200).json(response);
} catch (error) {
    res.status(500).json({ message: error.message });
}
}

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await category.create({
      id: id,
      name: name,
    });
    res.status(201).json(newCategory);
  } catch (error) { 
    res.status(409).json({ message: error.message });
  }
}

export const updateCategory =  (req, res) => {
    
}

export const deleteCategory =  (req, res) => {
    
}
export default category;