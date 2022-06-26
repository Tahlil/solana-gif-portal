use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod gifportal {
    use super::*;

    pub fn start_stuff_off(ctx: Context<StartStaffOff>) -> ProgramResult {
        Ok(())
    }
    
    
}

