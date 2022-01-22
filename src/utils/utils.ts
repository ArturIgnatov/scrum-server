import express from 'express';

class UtilsClass {
  public createRouter() {
    return express.Router();
  }
}

export const Utils = new UtilsClass();
