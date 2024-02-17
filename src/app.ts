import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import requestsLogger from "./middlewares/requestsLogger";
import { rateLimiter } from "./middlewares/security";