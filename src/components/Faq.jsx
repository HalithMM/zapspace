import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

export const Faq = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box textAlign="center" mb={4}>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          fontWeight="bold"
          gutterBottom
        >
          Frequently Asked Questions
        </Typography> 
      </Box>

      {/* Animation wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Accordion 1 */}
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight="medium">
              Project Timelines & Planning
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              <strong>Q: How long does an interior design project take?</strong>
              <br />
              A: Our interior design projects in Tamil Nadu usually take 12-16 days for a single room, while full home designs may take 1-2 months depending on customization.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Q: What’s included in your service?</strong>
              <br />
              A: We provide end-to-end services including layout planning, 3D design concepts, material selection, budget-friendly sourcing, and on-site project supervision.
            </Typography>
          </AccordionDetails>
        </Accordion> 
        {/* Accordion 2 */}
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight="medium">
              Pricing & Payment Options
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              <strong>Q: How much does it cost to design a home in Tamil Nadu?</strong>
              <br />
              A: We offer competitive pricing with flat rates based on your needs. You will get a free estimatation for your dream project after a design consultation.
            </Typography>
          </AccordionDetails>
        </Accordion> 
        {/* Accordion 3 */}
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight="medium">
              Customization & Eco-Friendly Designs
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              <strong>Q: Do you offer eco-friendly interior designs in Tamil Nadu?</strong>
              <br />
              A: Yes! We specialize in sustainable home designs using recycled materials, energy-efficient lighting, and air quality optimization.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Q: Can I customize every part of the interior?</strong>
              <br />
              A: Absolutely. From modular kitchens to heritage-themed bedrooms, we tailor every detail to suit your style, culture, and budget.
            </Typography>
          </AccordionDetails>
        </Accordion> 
        {/* Accordion 4 */}
        <Accordion sx={{ mb: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="subtitle1" fontWeight="medium">
              Post-Project Support
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="text.secondary">
              <strong>Q: What if something gets damaged after installation?</strong>
              <br />
              A: We offer a 10-year service warranty on all workmanship and priority customer support for repairs or updates.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </motion.div>
    </Container>
  );
};
