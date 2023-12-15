import detailkuliner from "../models/KulinerModels.js";


export const getKuliner = async (req, res) => {
    try {
        const response = await detailkuliner.findAll(
            {
                include: 'category', 
            }
        );
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });

@@ -12,7 +16,7 @@ export const getKuliner = async (req, res) => {

export const getKulinerById = async (req, res) => {
    try {
        const response = await detailkuliner.findOne({
            where: {
                uuid: req.params.id
            }

@@ -30,7 +34,7 @@ export const createKuliner = async (req, res) => {
        
    
        // Buat data wisata baru
        const newKuliner = await detailkuliner.create({
          name,
          description,
          image,

@@ -48,7 +52,7 @@ export const createKuliner = async (req, res) => {

export const updateKuliner = async (req, res) => {
    try {
        const existingKuliner = await detailkuliner.findOne({
            where: {
                uuid: req.params.id
            }


@@ -77,10 +81,9 @@ export const updateKuliner = async (req, res) => {
    }
  }


export const deleteKuliner = async (req, res) => {
    try {
        const existingKuliner = await detailkuliner.findOne({
            where: {
                uuid: req.params.id
            }

@@ -100,4 +103,4 @@ export const deleteKuliner = async (req, res) => {
    }


export default detailkuliner;