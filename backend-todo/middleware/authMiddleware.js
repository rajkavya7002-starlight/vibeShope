import jwt from 'jsonwebtoken';
import { AppError } from '../utils/AppError.js';
export function protect(req, res, next) { const token = req.headers.authorization?.replace('Bearer ', ''); if (!token) return next(new AppError('Authentication required', 401)); try { req.user = jwt.verify(token, process.env.JWT_SECRET); next(); } catch { next(new AppError('Invalid or expired token', 401)); } }
export const authorize = (...roles) => (req, res, next) => roles.includes(req.user.role) ? next() : next(new AppError('Admin access required', 403));
