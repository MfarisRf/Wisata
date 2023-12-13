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
  const { name } = req.body;
  try {
    await category.create({
        name: name,
    });
    res.status(201).json({ message: "Category created!" });
  } catch (error) { 
    res.status(400).json({ message: error.message });
  }
}

export const updateCategory = async (req, res) => {
  try {
      const existingCategory = await category.findOne({
          where: {
              uuid: req.params.id
          }
      });

      if (!existingCategory) {
          return res.status(404).json({ msg: "Category not found!" });
      }

      const { name } = req.body;

      await existingCategory.update({
          name
      }, {
          where: {
              uuid: req.params.id
          }
      });

      res.status(200).json({ message: "Category updated!" });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
}

export const deleteCategory =  (req, res) => {
    
}
export default category;